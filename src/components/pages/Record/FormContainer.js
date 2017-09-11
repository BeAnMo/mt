import {connect} from 'react-redux';
import {setInputAtom, setInputArray} from '../../../actions';
import {FormPage} from './FormPage';

const getInputs = (e) => {
  const key = e.target.id;
  
  return e.target.type === 'checkbox' ?
    { key, value: e.target.checked } :
    { key, value: e.target.value };
};

const mapStateToProps = (state) => {
  return {
    migraine: state
  }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAtomChange(e){
            return dispatch(setInputAtom(getInputs(e)));
        },
        onArrayChange(e){
            let toDispatch = getInputs(e);
            let joined = toDispatch.value.split(',');

            Object.assign(toDispatch, {value: joined});
            console.log(joined)
            return dispatch(setInputArray(toDispatch));
        }
    };
};

const FormContainer = connect(
  null,
  mapDispatchToProps
)(FormPage);

export default FormContainer;
