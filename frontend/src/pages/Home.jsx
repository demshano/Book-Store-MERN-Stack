import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {AiOutlineEdit} from 'react-icons/ai';
import {BsInfoCircle} from 'react-icons/bs'
import {MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md';
import { Spinner } from "../components";


export const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading]  = useState(false);

    useEffect(()=>{
        setLoading(true);
        axios.get('http://localhost:5555/books')
        .then((respone)=>{
            setBooks(respone.data.bookData);
            setLoading(false);
        })
        .catch((error)=>{
            console.log(error);
            setLoading(false);
        })
    },[])

  return (
    <div>
        <Spinner />
    </div>
  )
}
