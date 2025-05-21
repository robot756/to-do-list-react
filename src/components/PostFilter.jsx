import React from 'react'
import { MySelect } from './UI/select/MySelect'
import MyInput from './UI/input/MyInput'


const PostFilter = ({ setFilter, value }) => {
  return (
    <div>

      <MyInput
        value={value.query}
        placeholder="Поиск"
        type="text"
        onChange={(e) => setFilter({ ...value, query: e.target.value })}
      />

      <MySelect
        options={[
          { value: 'title', name: 'По названию' },
          { value: 'body', name: 'По описанию' }
        ]}
        defaultValue='Сортировка'
        onChange={setFilter}
        value={value}
      />

    </div>
  )
}

export default PostFilter