import React from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Keyword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

/*
  render() {
    return (
      <table>
        <thead>
        <tr className="keyword-header">
          <th>keywords</th>
          <th>score</th>
        </tr>
        </thead>
        <tbody>
        {this.props.keywords.map((keyword, index) => {
          return (
            <tr key={index}>
              <td>{keyword.class}</td>
              <td>{keyword.score}</td>
            </tr>
          );
        })}
        </tbody>
      </table>
    );
  }
*/
  render() {
    return (
      <ScrollView >
        <View style={styles.column} key={-1}>
          <Text style={styles.heading}>Main</Text>
          <Text style={styles.heading}>Score</Text>
        </View>
        {this.props.keywords.map((keyword, index) => {
          return (
            <View style={styles.column} key={index}>
              <Text style={styles.text}>{keyword.class}</Text>
              <Text style={styles.text}>{keyword.score}</Text>
            </View>
          )
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  column: {
    flexDirection: 'row',
    flex: 1
  },
  heading: {
    fontWeight: 'bold',
    flexDirection: 'column',
    paddingBottom: 10,
    width: 200
  },
  text: {
    flexDirection: 'column',
    width: 200
  }
});

export default Keyword;
