import { useEffect, useState } from 'react';
import {getAllBlogs} from '../../api/blogs'
import './style.css';
import store from '../../models/store';
import { useSelector, useDispatch, connect } from 'react-redux';

const Blog = ({count, loading}) => {
    const {dispatch}  = store;
    const [data, updateData] = useState([]);


    //   const mapDispatch = (dispatch) => ({
    //     increment: () => dispatch.count.increment(1),
    //     incrementAsync: () => dispatch.count.incrementAsync(1),
    //   });
    

      const generateKeys = (key, arg) => {
        const newKey = key.concat(arg)
            return newKey
      }

      return (<>{loading? <div>Loading</div> : count.map((e) => {
            return <div key={generateKeys(e._id, "_block")} className='blogBlock'>
                <div key={e._id} className='blogTitle'>{e._id}</div>
                    <div key={generateKeys(e._id, "_id")} className='blogTitle'>{e.title}</div>
                    <div key ={generateKeys(e._id, "body")}>{e.body} </div>
                </div>
        })}
      </>)

}

const mapState = (state) => ({
    count: state.count,
    loading: state.loading.models.count,
  });

export default connect(mapState)(Blog);