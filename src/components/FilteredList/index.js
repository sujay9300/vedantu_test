import React, {useState, useEffect} from 'react';
import axios from 'axios';
import RepoItem from '../RepoItem';

const FilteredList=()=>{
    const [repoList,setRepoList]=useState([]);
    const [rawRepoList,setRawRepoList]=useState([]);
    const [searchValue,setSearchValue]= useState('');
    const [typeFilter,setTypeFilter]= useState('all');

    useEffect(()=>{
        axios.get('https://api.github.com/users/supreetsingh247/repos').then(res=>{
            setRawRepoList(res.data);
            setRepoList(res.data);
        })
    },[])

    useEffect(()=>{
        console.log('rawRepoList',rawRepoList)
        const filteredList = rawRepoList.filter(item=>{
            debugger;
            console.log('type',item[typeFilter])
            return (typeFilter==='all'?true:item[typeFilter]) && item['name'].toLowerCase().includes(searchValue.toLowerCase());
        });

       setRepoList(filteredList);
        console.log('filteredList',filteredList);

    },[rawRepoList,searchValue,typeFilter])
    
return <div>
    <div style={{display:'flex'}}>
        <div style={{width:'100%'}}>
        <input style={{width:"95%"}} value={searchValue} type="text" placeholder="Find a repository..." onChange={(e)=>{
            setSearchValue(e.currentTarget.value)
            }} />
        </div>
        <div>
            <select onChange={(e)=>{
            setTypeFilter(e.currentTarget.value)
        }} name="types" id="types">
            <option value="all">All</option>
            <option value="source">Source</option>
            <option value="fork">Forks</option>
            <option value="archived">Archived</option>
            <option value="mirrors">Mirrors</option>
        </select>
        </div>
        
    </div>
        <div>{`searching for ${searchValue}`}</div>
    <div>{repoList.map(repo=><RepoItem data={repo} />)}</div>
    
    </div>
}

export default FilteredList;