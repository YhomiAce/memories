import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch} from 'react-redux';
import FileBase from "react-file-base64";

import useStyles from "./styles";
import { createPost } from '../../actions/posts'

const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const dispatch = useDispatch();

  const { creator, title, message, tags, selectedFile } = postData;
  const classes = useStyles();

  const changeHander = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData))
  };

  const clear = () => {

  }

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Creating A Memory</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={creator}
          onChange={changeHander}
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={title}
          onChange={changeHander}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={message}
          onChange={changeHander}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={tags}
          onChange={changeHander}
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            type="submit"
          >Submit</Button>
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="secondary"
            size="small"
            fullWidth
            onClick={clear}
          >Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;
