import {getAllBlogs} from '../api/blogs'

export const count = {
    state: [], // initial state
    reducers: {
      // handle state changes with pure functions
      setBlogData(state, payload){
        return payload ? payload: state
      }
    },
    effects: (dispatch) => ({
        async getAllBlogs(payload, rootState) {
            getAllBlogs().then((d) => {
                this.setBlogData(d)
            });
        },
    }),
    selectors: (state) => ({
         selectAllBlogs(state){
            return state
         }  
    })
  };