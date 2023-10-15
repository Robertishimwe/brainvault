import User from "../models/users";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { regiserValidation, loginValidation } from "../middleware/usersValidation";

class UserController {
    static async createUser(req, res) {
        try {
            const { error } = regiserValidation(req.body);
            if (error) return res.status(400).send(error.details[0].message);
            const user = await User.findOne({ userEmail: req.body.userEmail });
            if (user) return res.status(400).send({ message: "User already exists" });

            const newUser = new User({
                userName: req.body.userName,
                userEmail: req.body.userEmail,
                userPassword: req.body.userPassword,
                userRole: req.body.userRole,
            });
            const savedUser = await newUser.save();
            res.status(201).send({
                Message: "User created successfully",
                user: savedUser,
            });
        } catch (error) {
            res.status(400).send(error);
        }
    }
    static async login(req, res) {
        try {
            const { error } = loginValidation(req.body);
            // console.log(req.body.userPassword, user.userPassword);
            if (error) return res.status(400).send(error);
            const user = await User.findOne({ userEmail: req.body.userEmail });
            if (!user) return res.status(400).send({ message: "User does not exist" });
            const validPass = await bcrypt.compare(req.body.userPassword, user.userPassword);
            if (!validPass) return res.status(400).send({ message: "Invalid password" });
            const token = jwt.sign({ _id: user._id, userEmail: user.userEmail }, process.env.TOKEN_SECRET);
            res.header("token", token).send({ message: token });
        } catch (error) {
            res.status(400).send(">>>>>>>.",error);
        }
    }
    static async findAllUsers(req, res) {
        try {
            const users = await User.find();
            res.status(200).send(users);
        } catch (error) {
            res.status(400).send(error);
        }
    }
    static async findOneUser(req, res) {
        try {
            const user = await User.findById(req.params.id);
            res.status(200).send(user);
        } catch (error) {
            res.status(400).send(error);
        }
    }
    static async updateUser(req, res) {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.status(200).send(user);
        } catch (error) {
            res.status(400).send(error);
        }
    }
    static async deleteUser(req, res) {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            res.status(200).send(user);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    static async findUserByEmail(req, res) {
        try {
            const user = await User.findOne({ userEmail: req.params.email });
            res.status(200).send(user);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    static async findUserByName(req, res) {
        try {
            const user = await User.findOne({ userName: req.params.name });
            res.status(200).send(user);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    static async findUserByRole(req, res) {
        try {
            const user = await User.findOne({ userRole: req.params.role });
            res.status(200).send(user);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    static async assignBadge(req, res) {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                badges: req.body.badges,
            });
            res.status(200).send(user);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    static async assignRole(req, res) {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                userRole: req.body.userRole,
            });
            res.status(200).send(user);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    static async blockUser(req, res) {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                blocked: req.body.blocked,
            });
            res.status(200).send(user);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    static async unblockUser(req, res) {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                blocked: req.body.blocked,
            });
            res.status(200).send(user);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    static async deleteUserBadges(req, res) {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                badges: [],
            });
            res.status(200).send(user);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}

export default UserController;

// class UserController{

// Create user Controller
//  static createUser = async (req,res)=>{
//   const {error} = regiserValidation(req.body)
//     if(error){
//         res.status(400).send({Message:error.details[0].message})
//     }
//     else{
//     const user = new User({
//         "userName":req.body.userName.trim(),
//         "userEmail":req.body.userEmail.trim(),
//         "userPassword":req.body.userPassword.trim()
//     })
//     const emailValidation = await User.findOne({userEmail:req.body.userEmail});
//     try {

//         if(emailValidation){
//             res.send({Message:"User already exist"})
//         }
//         else{
//             await user.save()
//             res.status(200).send({Message:"Account created successfully"})
//         }
//     } catch (error) {
//         res.status(500).send({Message:"server error",error})
//     }

// }
// }

//  // login controller

//  static login = async (req,res)=>{

//     const {error} = loginValidation(req.body)
//     if(error) return res.status(400).send(error.details[0].message)

//     const email = req.body.userEmail;
//     const user = await User.findOne({userEmail:email});
//     // res.send(user)
//     if(!user){
//        return res.status(404).send({Message:"User not found"})
//     }

//     try {
//      const userPassword = user.userPassword;
//     if(await bcrypt.compare(req.body.userPassword,userPassword)){
//         const token = jwt.sign({id:user._id}, process.env.TOKEN_SECRET)

//    const userRole = user.userRole;
//    if(userRole == "admin") return res.set("token", token).send({Message:"successfully logged in",token:token,role:userRole})
//    if(userRole == "user") return res.set("token", token).send({Message:"successfully logged in",token:token,role:userRole})

//     }else{
//         res.status(401).send({Message:"Invalid username or password"})
//     }
//     } catch (error) {
//         res.status(500).send(error)
//     }

// }

//  static findAllUsers = async (req,res)=>{

//     let userId = req.user.id
//     const loggedUser = await User.findById(userId);
//     const userRole = loggedUser.userRole;
//     if(userRole == "user") return res.status(401).send({Message:"you are not allowed to access this page"})

//     const user = await User.find()
//     res.send(user)
//  }

//  static validite = async (req,res)=>{

//     let userId = req.user.id
//     const loggedUser = await User.findById(userId);
//     const userRole = loggedUser.userRole;

//     if(userRole == "admin") return res.status(200).send({Admin_validite:true})
//     if(userRole == "user") return res.status(200).send({User_validite:true,Loggedname:loggedUser.userName})

//     const user = await User.find()
//     res.send(user)
//  }

//  // user profile route

// static profile = async (req,res)=>{

//     let userId = req.user.id

//     const user = await User.findById(userId);
//     if(userId == user._id ){
//         res.status(200).send({Message:"your profile",

//         profile:{Name:user.userName,Email:user.userEmail,Role:user.userRole, joiningDate:user.CreatedDate}})

//     }else{
//         return res.status(401).send({Message:"you are not allowed to access this page"})
//     }
//  }

// }
// export default UserController;