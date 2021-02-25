import React from 'react' 
import {View, Text, Image, ScrollView} from 'react-native'
import Unit from './News.Unit'
import styles from './News.Style'


const News = (props) => {
    const mockNews = [
        {highlight: 'News One', body: 'Body of News One', image: '', createdAt: Date.now()},
        {highlight: 'News Two', body: 'Body of News Two', image: '', createdAt: Date.now()},
        {highlight: 'News Three', body: 'Body of News Three', image: '', createdAt: Date.now()},
    ];
    return (
    <ScrollView
        style={styles.container}
    >
    {mockNews.map((news, index) => (
        <Unit
            highlight={news.highlight}
            body={news.body}
            createdAt={news.createdAt}
            image={news.image}
            key={index}
        />
    ))}
    </ScrollView>
    )
}

export default News;