
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./reducerSlice";
import { updateCurrentPage } from "./reducerSliceForPagination";

const App = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);
    
    const fetchPost = useSelector(rootStore => rootStore?.fetchPost);

    // Pagination
    const currentPage = useSelector(rootStore => rootStore?.pagination?.currentPage);
    const recordsPerPage = useSelector(rootStore => rootStore?.pagination?.recordsPerPage);
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = fetchPost?.data.slice(firstIndex, lastIndex);
    const numbers = Array.from({ length: Math.floor(fetchPost?.data.length / recordsPerPage) }, (_item, index) => index + 1);

    if (fetchPost?.isLoading) return "Loading...";

    return <>
    <ul>
        {records?.map((item, index) => {
            return <li key={index}>{item.title}</li>
        })}
    </ul>

    <br/><br/><br/><br/><br/>

    <ul>
        {numbers?.map((item, index) => {
            return <li key={index} style={{ display: "inline-block", padding: "10px", border: "1px solid", cursor:"pointer" }} onClick={() => dispatch(updateCurrentPage(item))}>{item}</li>
        })}
    </ul>
    </>
}

export default App;
