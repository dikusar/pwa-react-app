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
// import suggestions from './suggestions'
import theme from '../../App.theme'
import { updateInputValue, getSuggestions, clearSuggestions } from '../../ActionCreators/autocomplete'

const mixStyles = ()=> (Object.assign(styles(theme), flexStyles(theme)))

function renderInput(inputProps) {
  const { label, classes, ref, ...other } = inputProps;
  return (
        <TextField
            label={ label }
            fullWidth
            inputRef={ ref }
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
      { children }
    </Paper>
  );
}

function getSuggestionValue(suggestion) {
  return suggestion;
}


class IntegrationAutosuggest extends React.Component {

  // state = {
  //   suggestions: []
  // };

  render() {
    const { classes, inputLabel, value, suggestions, onChange, onSuggestionsFetchRequested, onSuggestionsClearRequested  } = this.props;

    return (
      <div className={ classes.flex }> 
        <Icon className={ classes.prefixIcon } color="black">
          directions_car
        </Icon>
        <Autosuggest

          theme={{
            container: classes.container,
            suggestionsContainerOpen: classes.suggestionsContainerOpen,
            suggestionsList: classes.suggestionsList,
            suggestion: classes.suggestion,
            input: classes.input
          }}

          renderInputComponent={ renderInput }
          suggestions={ suggestions }
          onSuggestionsFetchRequested={ onSuggestionsFetchRequested }
          onSuggestionsClearRequested={ onSuggestionsClearRequested }
          renderSuggestionsContainer={ renderSuggestionsContainer }
          getSuggestionValue={ getSuggestionValue }
          renderSuggestion={ renderSuggestion }

          inputProps={{
            label: inputLabel,
            classes,
            placeholder: `Search a ${inputLabel.toLowerCase()}`,
            value,
            onChange
          }}

        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { value, suggestions }=state.autocomplete;
  return {
    value,
    suggestions
  };
};

function mapDispatchToProps(dispatch) {
  return {
    onChange(event, { newValue }) {
      dispatch(updateInputValue(event, { newValue }));
    },

    onSuggestionsFetchRequested({ value, reason }) {
      dispatch(getSuggestions({ value, reason }));
    },

    onSuggestionsClearRequested() {
      dispatch(clearSuggestions());
    }

  };
}

IntegrationAutosuggest.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withStyles(mixStyles, { name: 'autocomplete' }),

  connect(
      mapStateToProps,
      mapDispatchToProps
  )

)(IntegrationAutosuggest);
