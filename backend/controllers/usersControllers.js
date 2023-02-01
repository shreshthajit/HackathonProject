const User = require("../model/userModel.js");
const bcrypt = require("bcrypt");
const documentFormSchema = require("../model/documentFormModel.js");

module.exports.register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    const usernameCheck = await User.findOne({ username });
    if (usernameCheck)
      return res.json({ msg: "Username already used", status: false });

    const emailCheck = await User.findOne({ email });
    if (emailCheck)
      return res.json({ msg: "Email already used", status: false });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      username,
      password: hashedPassword,
    });

    delete user.password;
    return res.json({ status: true, user });
  } catch (ex) {
    next(ex);
  }
};

module.exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user)
      return res.json({ msg: "Incorrect Username or Password", status: false });
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.json({ msg: "Incorrect Username or Password", status: false });
    delete user.password;
    return res.json({ status: true, user });
  } catch (ex) {
    next(ex);
  }
};

module.exports.setAvatar = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const avatarImage = req.body.image;

    const userData = await User.findByIdAndUpdate(userId, {
      isAvatarImageSet: true,
      avatarImage,
    });
    return res.json({
      isSet: userData.isAvatarImageSet,
      image: userData.avatarImage,
    });
  } catch (ex) {
    next(ex);
  }
};


module.exports.paymentStatus = async (req,res,next) => {
  try {
    const userId = req.params.id;
    const avatarImage = req.body.image;
    const userData = await User.findByIdAndUpdate(userId, {
      isAvatarImageSet: true,
      avatarImage,
    });
    return res.json({
      isSet: userData.isAvatarImageSet,
      image: userData.avatarImage,
    });
  } catch (ex) {
    next(ex);
  }
};










module.exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({ _id: { $ne: req.params.id } }).select([
      "email",
      "username",
      "avatarImage",
      "_id",
    ]);
    return res.json(users);
  } catch (ex) {
    next(ex);
  }
};

///controller for document form
module.exports.documentFormRegister = async (req, res, next) => {
  try {
    const {
      username,
      email,
      phone,
      languageTest,
      languageTestScore,
      targetSchool,
      course,
      targetCountry,
      documentType,
    } = req.body;

    const usernameCheck = await documentFormSchema.findOne({ username });
    if (usernameCheck)
      return res.json({ msg: "Username already used", status: false });

    const emailCheck = await documentFormSchema.findOne({ email });
    if (emailCheck)
      return res.json({ msg: "Email already used", status: false });

    //const hashedPassword = await bcrypt.hash(password, 10);
    const documentForm = await documentFormSchema.create({
      username,
      email,
      phone,
      languageTest,
      languageTestScore,
      targetSchool,
      course,
      targetCountry,
      documentType,
    });
    //console.log(documentForm);

    // delete user.password;
    return res.json({ status: true, documentForm });
  } catch (ex) {
    next(ex);
  }
};

module.exports.getRegInfo = async (req, res, next) => {
  try {
    //const user = await User.findById(req.params.userId);
    const users = await User.find({});

    return users.filter((user) => user.isConsultant === true)

    const filters = req.body;
    
    const filteredUsers = users.filter((user) => {
      let isValid = true;
      for (key in filters) {
        console.log(key, user[key], filters[key]);
        isValid = isValid &&  user[key] === true;
        if(user[key]) return  true;
      }
      return isValid;
      //return false;
    });
    //console.log(filteredUsers);
    res.send(filteredUsers);

    // const list = user.filter((friendId) => {
    //   return friendId.isConsultant == true;
    // });

    // let list = user
    //   .filter(function (student) {
    //     return student.isConsultant === false;
    //   })
    //   .map(function (student) {
    //     return student.username;
    //   });

    // const friends = await Promise.all(
    //   user.followings.map((friendId) => {
    //     return User.findBy(friendId);
    //   })
    // );
    // let friendList = [];
    //  friends.map((friend) => {
    //   if(friend.isConsultant == true){
    //   const { username, email } = friend;
    //   friendList.push({ username, email });
    //   }
    // });
    //console.log(list);
    //res.status(200).json(friendList);
    //res.status(200).json("found users");
  } catch (ex) {
    next(ex);
  }
};


module.exports.getAllConsultant = async (req, res, next) => {
  try {
    //const user = await User.findById(req.params.userId);
    console.log({isConsultant})
    const { isConsultant } = req.params;
    return await User.find({ isConsultant: true });
  }
  catch {}
}