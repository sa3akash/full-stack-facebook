import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { all_post, loading_post } from "../store/PostReducer";

const useInfiniteScroll = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [hashMore, setHashMore] = useState(false);

  const { user } = useSelector((state) => state.Auth);

  const dispatch = useDispatch();

  useEffect(() => {
    setData([]);
  }, []);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const { data: findData } = await axios.get(url, {
        params: { page: page },
        withCredentials: true,
        headers: { Authorization: `Bearer ${user.token}` },
      });
      // setData((prev) => [...new Set([...prev, ...findData.data])]);
      dispatch(all_post(findData.data));
      setHashMore(findData.numberOfPages < page);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const observer = useRef(null);
  const lastElementRef = useCallback(
    (element) => {
      if (loading) return;
      if (hashMore) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      }, {});

      if (element) observer.current.observe(element);
    },
    [loading]
  );

  return { data, loading, lastElementRef };
};

export default useInfiniteScroll;
