import axios from "axios";

export const updateProfile = async ({ url, token }) => {
  try {
    const res = await axios.put(
      `${import.meta.env.VITE_API_URL}/updateProfilePicture`,
      { url },
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    );
    return res;
  } catch (err) {
    return err.response.data.message;
  }
};
export const updateCover = async ({ url, token }) => {
  try {
    const res = await axios.put(
      `${import.meta.env.VITE_API_URL}/updateCoverPicture`,
      { url },
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    );
    return res;
  } catch (err) {
    return err.response.data.message;
  }
};

export const addFriend = async ({ id, token }) => {
  try {
    const res = await axios.put(
      `${import.meta.env.VITE_API_URL}/addFriend/${id}`,
      {},
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    );
    return res;
  } catch (err) {
    return err.response.data.message;
  }
};

export const deleteRequest = async ({ id, token }) => {
  try {
    const res = await axios.put(
      `${import.meta.env.VITE_API_URL}/deleteRequest/${id}`,
      {},
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    );
    return res;
  } catch (err) {
    return err.response.data.message;
  }
};

export const follow = async ({ id, token }) => {
  try {
    const res = await axios.put(
      `${import.meta.env.VITE_API_URL}/follow/${id}`,
      {},
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    );
    return res;
  } catch (err) {
    return err.response.data.message;
  }
};

export const unFollow = async ({ id, token }) => {
  try {
    const res = await axios.put(
      `${import.meta.env.VITE_API_URL}/unFollow/${id}`,
      {},
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    );
    return res;
  } catch (err) {
    return err.response.data.message;
  }
};

export const acceptRequest = async ({ id, token }) => {
  try {
    const res = await axios.put(
      `${import.meta.env.VITE_API_URL}/acceptRequest/${id}`,
      {},
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    );
    return res;
  } catch (err) {
    return err.response.data.message;
  }
};

export const unFriend = async ({ id, token }) => {
  try {
    const res = await axios.put(
      `${import.meta.env.VITE_API_URL}/unFriend/${id}`,
      {},
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    );
    return res;
  } catch (err) {
    return err.response.data.message;
  }
};

export const cancelFriend = async ({ id, token }) => {
  try {
    const res = await axios.put(
      `${import.meta.env.VITE_API_URL}/cancelFriend/${id}`,
      {},
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    );
    return res;
  } catch (err) {
    return err.response.data.message;
  }
};

export const searchFriends = async ({ search, token }) => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}/search/${search}`,
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    );
    return res;
  } catch (err) {
    return err.response.data.message;
  }
};

export const addToSearchHistry = async ({ searchUserId, token }) => {
  const createdAt = new Date();
  try {
    const res = await axios.put(
      `${import.meta.env.VITE_API_URL}/addToSearchHistry`,
      { searchUserId, createdAt },
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    );
    return res;
  } catch (err) {
    return err.response.data.message;
  }
};
export const getSearchHistry = async ({ token }) => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}/getSearchHistry`,
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    );
    return res;
  } catch (err) {
    return err.response.data.message;
  }
};
export const removeSearchHistry = async ({ removeId, token }) => {
  try {
    const res = await axios.put(
      `${import.meta.env.VITE_API_URL}/removeSearchHistry`,
      { removeId },
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    );
    return res;
  } catch (err) {
    return err.response.data.message;
  }
};
export const getFriendsPageInfo = async ({ token }) => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}/getFriendsPageInfo`,
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    );
    return res;
  } catch (err) {
    return err.response.data.message;
  }
};
