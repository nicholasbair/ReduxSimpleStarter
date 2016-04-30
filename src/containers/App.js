import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchHistory, fetchDogs, openModal, closeModal } from '../actions/index';
import { Grid, Row, Col } from 'react-bootstrap';
import TopNav from '../components/TopNav';
import ActivityMenu from '../components/ActivityMenu';
import DogCard from '../components/DogCard';
import HistoryFeed from '../components/HistoryFeed';
import ActivityModal from './ActivityModal';

class App extends Component {
  componentWillMount() {
    this.props.fetchHistory();
    this.props.fetchDogs();
  }

  pullActivityDuration() {
    let data = this.props.history;
    let durations = [];
    data.forEach((item) => {
      if (item.participants[1] === 'Rocko') {
        durations.push(item.duration);
      }
    });

    return durations;
  }

  renderDogCards() {
    return this.props.dogs.map((dog) =>
      <DogCard
        key={dog.id}
        name={dog.name}
        tagline={dog.tagline}
        img={dog.img}
        durations={this.pullActivityDuration()}
      />
    );
  }

  render() {
    const styles = {
      fullHeight: {
        height: '90vh'
      },
      activityMenu: {
        paddingLeft: 0,
        height: '90vh'
      },
      historyFeed: {
        paddingRight: 0,
        height: '90vh'
      }
    };

    return (
      <div>
        <TopNav />
        <Grid fluid style={styles.fullHeight}>
          <Row style={styles.fullHeight}>
            <Col xs={1} style={styles.activityMenu}>
              <ActivityMenu
                activities={this.props.activities}
                openModal={this.props.openModal}
              />
            </Col>
            <Col xs={8} style={styles.fullHeight}>
              <Row>
                {this.renderDogCards()}
              </Row>
            </Col>
            <Col xs={3} style={styles.historyFeed}>
              <HistoryFeed
                history={this.props.history}
                openModal={this.props.openModal}
              />
            </Col>
          </Row>
        </Grid>
        <ActivityModal closeModal={this.props.closeModal} />
      </div>
    );
  }
}

App.propTypes = {
  fetchHistory: PropTypes.func.isRequired,
  fetchDogs: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  history: PropTypes.array.isRequired,
  activities: PropTypes.array.isRequired,
  dogs: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    history: state.activities.history,
    activities: state.activities.activityTypes,
    dogs: state.activities.dogs
  };
}

export default connect(mapStateToProps, { fetchHistory, fetchDogs, openModal, closeModal })(App);
