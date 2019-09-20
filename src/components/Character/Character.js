import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    align-items: center;
    border: 2px solid darkgrey;
`;

const Header = styled.h2`
    text-align: center;
    margin: 0 auto;
`;

const List = styled.ul`
    list-style: none;
`;

const ListItem = styled.li`
    list-style: none;
`;

const Character = props => {
    return (
        <Container>
            <Header>{ props.name }</Header>
            <List>
                { props.aliases.length > 1 ? (
                    props.aliases.map(alias => {
                        return (
                            <ListItem>
                                { alias }
                            </ListItem>
                        )
                    })
                ) : (
                        <p>{ props.aliases }</p>
                    ) }
            </List>
            <p>Born: { props.born }</p>
            { props.died !== "" ? (
                <p>Died: { props.died }</p>
            ) : null }

            { props.culture.length > 1 ? (
                <List>
                    { props.culture.map(cult => {
                        return (
                            <ListItem>{ cult }</ListItem>
                        )
                    }) }
                </List>
            ) : <p>{ props.culture }</p> }

            { props.playedBy.length > 1 ? (
                <List>
                    { props.playedBy.map(act => {
                        return (
                            <ListItem>{ act }</ListItem>
                        )
                    }) }
                </List>
            ) : <p>{ props.playedBy }</p> }
        </Container >
    )
};

export default Character;
