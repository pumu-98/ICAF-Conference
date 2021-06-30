import React, { useState, useEffect } from 'react';
import download from 'downloadjs';
import axios from 'axios';
import { API_URL } from '../utils/constants';

const List = () => {
  const [list, setList] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const getFile = async (id) => {
      try {
        const { data } = await axios.get(`${API_URL}/get/${id}`);
        console.log("14");
        setErrorMsg('');
        setList(data);
      } catch (error) {
        error.response && setErrorMsg(error.response.data);
      }
    };

    getFile();
  }, []);

  return (
    <div className="files-container">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <table className="files-table">
        <thead align="center">
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Download File</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
        {list.length > 0 ? (
            list.map(
              ({ _id, title, description, file_path, file_mimetype }) => (
                <tr key={_id}>
                  <td className="file-title">{title}</td>
                  <td className="file-description">{description}</td>
                  <td>
                    <a
                      href="#/"
                      onClick={() =>
                        downloadFile(_id, file_path, file_mimetype)
                      }
                    >
                      Download
                    </a>
                  </td>
                  <td>
                  <button type="delete" id="dl"
                      onClick={() =>
                        deleteFile(_id)
                      }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            )
          ) : (
            <tr>
              <td colSpan={3} style={{ fontWeight: '300' }}>
                No files found. Please add some.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );

};

export default List;