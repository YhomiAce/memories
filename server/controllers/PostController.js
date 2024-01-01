import PostMessage from "../Models/Post.js"

export const getPosts = async(req, res) =>{
   try {
    //    return res.send("hello")
       const posts = await PostMessage.find();
       return res.status(200).send({
           status: true,
           data: posts
       });
   } catch (error) {
       return res.status(500).send({
           status: false,
           message: error.message
       });
   }
}

export const createPost = async(req, res) =>{
    try {
        const post = req.body;

        const newPost = new PostMessage(post);
        console.log(newPost);
        const savedPost = await newPost.save();

        return res.status(201).send({
            status: true,
            data: savedPost
        });
    } catch (error) {
        return res.status(500).send({
            status: false,
            message: error.message
        });
    }
}