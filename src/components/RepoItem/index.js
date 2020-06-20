import React from 'react';
import styled from 'styled-components';

const NameWrp = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
`;

const RepoWrp = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 0rem;
    border-bottom: 2px solid #ccc;
`;

const RepoName = styled.div`
    padding: 1rem 0rem;
    color:blue;
`;

const RepoItem=(props)=>{
    const {data}=props;
return <RepoWrp>
            <NameWrp>
                <RepoName>{data.name}</RepoName>
                <div>{data.description}</div>
            </NameWrp>
            <div>
                <div>{data.fork?'show star':'no start'}</div>
            </div>
        </RepoWrp>
}

export default RepoItem;