import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHistory } from '../actions/index';
import { Grid, Row, Col } from 'react-bootstrap';
import TopNav from '../components/TopNav';
import ActivityMenu from './ActivityMenu';
import DogCard from '../components/DogCard';
import HistoryFeed from './HistoryFeed';
import ActivityModal from './ActivityModal';
import HistoryModal from './HistoryModal';

class App extends Component {
  componentWillMount() {
    this.props.fetchHistory();
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
    return this.props.history.map((item) => {
      return (
        <DogCard
          key={item.id}
          durations={this.pullActivityDuration()}
        />
      );
    });
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
              <ActivityMenu />
            </Col>
            <Col xs={8} style={styles.fullHeight}>
              <Row>
                {this.renderDogCards()}
              </Row>
            </Col>
            <Col xs={3} style={styles.historyFeed}>
              <HistoryFeed />
            </Col>
          </Row>
        </Grid>
        <ActivityModal />
        <HistoryModal />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { history: state.history.all };
}

export default connect(mapStateToProps, { fetchHistory })(App);