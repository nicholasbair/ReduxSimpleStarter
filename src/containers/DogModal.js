import React, { Component, PropTypes } from 'react';
import { postDog, updateDog, deleteDog } from '../actions/dogs';
import styles from '../../style/styles';
import { reduxForm } from 'redux-form';
import Dropzone from 'react-dropzone';
import {
  Modal,
  Form,
  FormGroup,
  Button,
  ButtonGroup,
  Col,
  Radio,
  FormControl
} from 'react-bootstrap';

class DogModal extends Component {
  onPostDog() {
    const { values, formData, formType } = this.props;

    if (formType === 'post') {
      this.props.postDog(values);
    } else {
      this.props.updateDog(values, this.props.formData._id);
    }

    this.props.closeDogModal();
    this.props.destroyForm();
  }

  cancelModal() {
    this.props.closeDogModal();
    this.props.destroyForm();
  }

  render() {
    const {
      fields: { name, tagline, img },
      handleSubmit,
      activityType,
      initialValues,
      deleteHistoryItem
    } = this.props;

    return (
      <div className="dog-modal">
        <Modal
          aria-labelledby="modal-label"
          style={styles.modalStyle}
          backdropStyle={styles.backdropStyle}
          show={this.props.showDogModal}
          onHide={this.close}
        >
          <div style={styles.dialogStyle}>
            <Col xs={1} className="modal-activity-letter">+</Col>
            <Col xs={11}>
              <h3 id="modal-label" className="activity-label">Title goes here</h3>
            </Col>
            <Form horizontal onSubmit={handleSubmit(() => this.onPostDog())}>

              <FormGroup>
                <Col sm={12}>
                  <h4>Name</h4>
                </Col>
                <Col sm={12}>
                  <FormControl
                    className="modal-input-length"
                    type="name"
                    placeholder="name"
                    {...name}
                  />
                </Col>
                <Col sm={12}>
                  <div className="text-help">{name.touched ? name.error : ''}</div>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col sm={12}>
                  <h4>Tagline</h4>
                </Col>
                <Col sm={12}>
                  <FormControl
                    type="tagline"
                    placeholder="tagline"
                    {...tagline}
                  />
                </Col>
                <Col sm={12}>
                  <div className="text-help">{tagline.touched ? tagline.error : ''}</div>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col sm={12}>
                  <h4>Image</h4>
                </Col>
                <Col sm={12}>
                  <Dropzone {...img} onDrop={(filesToUpload) => img.onChange(filesToUpload)}>
                    <div>Drag and drop a pic of your dog</div>
                  </Dropzone>
                </Col>
                <Col sm={12}>
                  <div className="text-help">{img.touched ? img.error : ''}</div>
                </Col>
              </FormGroup>

              <ButtonGroup vertical block>
                <Button type="submit" style={styles.baseButtonStyle}>
                  Add/update my dog!
                </Button>
                <Button
                  style={styles.cancelButtonStyle}
                  onClick={() => this.cancelModal()}
                >
                  Cancel
                </Button>
                {this.props.formType === 'update' ?
                  <Button
                    style={styles.deleteButtonStyle}
                    onClick={() => this.props.deleteDog(this.props.formData._id)}
                  >
                    <span className="glyphicon glyphicon-remove-circle"></span> Delete dog
                  </Button>
                : ''}
              </ButtonGroup>

            </Form>
          </div>
        </Modal>
      </div>
    );
  }
}

DogModal.propTypes = {
  closeDogModal: PropTypes.func.isRequired,
  postDog: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  deleteDog: PropTypes.func.isRequired,
  destroyForm: PropTypes.func.isRequired,
  fields: PropTypes.object.isRequired,
  showDogModal: PropTypes.bool.isRequired,
  values: PropTypes.object.isRequired,
  formData: PropTypes.object
};

function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = 'Enter a name';
  }

  if (!values.tagline) {
    errors.tagline = 'Enter a tagline';
  }

  if (!values.img) {
    errors.img = 'Add an image';
  }

  return errors;
}

function mapStateToProps(state) {
  return {
    showDogModal: state.dogs.dogModal.show,
    initialValues: state.dogs.dogModal.formData,
    formData: state.dogs.dogModal.formData,
    formType: state.dogs.dogModal.formType,
  };
}

export default reduxForm({
  form: 'ModalForm',
  fields: ['name', 'tagline', 'img'],
  validate
}, mapStateToProps, { postDog, updateDog, deleteDog })(DogModal);
