import Table from '@/components/Table';
import Wrapper from '@/components/Wrapper'
import { Users } from '@/users';
import React, { useState } from 'react';
import {AiOutlineClose} from 'react-icons/ai';
import '../styles/App.module.css'

const Search = () => {
  const [query, setQuery] = useState("");
  const [opensearch,setOpensearch] = useState(false)


  const keys = ["first_name", "last_name", "email", "gender"];

  function search(data) {
    return Users.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    )
  }

  return (
    <div className='w-full'>
      <Wrapper className="h-[100vh] m-auto pt-3 ">
    <div className="m-auto mt-[50px] flex flex-col items-center w-[900px]">
      <input type='text' placeholder='Search......' className="p-2.5 text-xl" onChange={(e) => setQuery(e.target.value)} />
      <Table data={search(Users).splice(0, 10)} />
      <AiOutlineClose className="text-[20px]
      absolute top-5 right-[8rem]" 
              onClick={() => setOpensearch(false)}
              />
    </div>
    </Wrapper>
    </div>
  )
}

export default Search