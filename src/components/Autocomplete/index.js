import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import compose from 'recompose/compose';

// import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import { MenuItem, withStyles, Icon, TextField, createMuiTheme } from 'material-ui';
// import { withStyles } from 'material-ui/styles';
// import Icon from 'material-ui/Icon';

import styles from './styleOptions'
import flexStyles from '../../styles/flexStyles'
import suggestions from './suggestions'
import theme from '../../App.theme'
import { selectValue } from '../../ActionCreators/autocomplete'

const mixStyles = ()=> (Object.assign(styles(theme), flexStyles(theme)))

function renderInput(inputProps) {
  const { label, classes, ref, ...other } = inputProps;
  return (
        <TextField
            label={label}
            fullWidth
            inputRef={ref}
            InputProps={{
              ...other,
        }}

      />
  );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.label, query);
  const parts = parse(suggestion.label, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map((part, index) => {
          return part.highlight ? (
            <span key={String(index)} style={{ fontWeight: 300 }}>
              {part.text}
            </span>
          ) : (
            <strong key={String(index)} style={{ fontWeight: 500 }}>
              {part.text}
            </strong>
          );
        })}
      </div>
    </MenuItem>
  );
}

function renderSuggestionsContainer(options) {
  const { containerProps, children } = options;

  return (
    <Paper {...containerProps} square>
      {children}
    </Paper>
  );
}

function getSuggestionValue(suggestion) {
  return suggestion;
}

function getSuggestions(value) {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
        const keep =
          count < 5 && suggestion.label.toLowerCase().slice(0, inputLength) === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
}

class IntegrationAutosuggest extends React.Component {
  state = {
    // id: null,
    // value: '',
    suggestions: []
  };

  handleSuggestionsFetchRequested = ({ value }) => {
    
    // this.setState({
    //   suggestions: getSuggestions(value),
    // });
  };

  handleSuggestionsClearRequested = () => {
    // this.setState({
    //   suggestions: [],
    // });
  };

  handleChange = (event, { newValue }) => {
    this.setState({
      value: typeof newValue === 'string' ? newValue : newValue.label,
      id: typeof newValue === 'string' ? null : newValue.id
    });
  };

  render() {
    const { classes, inputLabel, autocomplete  } = this.props;

    return (
      <div className={ classes.flex }> 
        <Icon className={ classes.prefixIcon } color="black">directions_car</Icon>
        <Autosuggest
          theme={{
            container: classes.container,
            suggestionsContainerOpen: classes.suggestionsContainerOpen,
            suggestionsList: classes.suggestionsList,
            suggestion: classes.suggestion,
            input: classes.input
          }}
          renderInputComponent={ renderInput }
          suggestions={ this.state.suggestions }
          onSuggestionsFetchRequested={ this.handleSuggestionsFetchRequested }
          onSuggestionsClearRequested={ this.handleSuggestionsClearRequested }
          renderSuggestionsContainer={ renderSuggestionsContainer }
          getSuggestionValue={ getSuggestionValue }
          renderSuggestion={ renderSuggestion }
          inputProps={{
            label: inputLabel,
            classes,
            placeholder: `Search a ${inputLabel.toLowerCase()}`,
            value: autocomplete.value,
            onChange: this.handleChange,
          }}
        />
      </div>
    );
  }
}

IntegrationAutosuggest.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withStyles(mixStyles, { name: 'autocomplete' }),
  connect((state, props) => {
    return {
        autocomplete: state.autocomplete
      }
    }, 
    { selectValue })
)(IntegrationAutosuggest);
