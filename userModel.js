import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:TransformStreamDefaultController, unique:true},
    password:{type:String, required:true},
    image: {type:String, default:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5OCIgaGVpZ2h0PSI5OCIgdmlld0JveD0iMCAwIDk4IDk4IiBmaWxsPSJub25lIj4KICA8Y2lyY2xlIGN4PSI0OSIgY3k9IjQ5IiByPSI0OSIgZmlsbD0iI0Y1RjVGNSI+PC9jaXJjbGU+CiAgPHBhdGggZD0iTTQ5LjEwMDggNDYuMTAwMUM1Mi40NDIyIDQ2LjEwMDEgNTUuMTUwOSA0My4zOTE0IDU1LjE1MDkgNDAuMDUwMUM1NS4xNTA5IDM2LjcwODcgNTIuNDQyMiAzNCA0OS4xMDA4IDM0QzQ1Ljc1OTUgMzQgNDMuMDUwOCAzNi43MDg3IDQzLjA1MDggNDAuMDUwMUM0My4wNTA4IDQzLjM5MTQgNDUuNzU5NSA0Ni4xMDAxIDQ5LjEwMDggNDYuMTAwMVoiIGZpbGw9IiNBQUFBQUEiPjwvcGF0aD4KICA8cGF0aCBvcGFjaXR5PSIwLjUiIGQ9Ik02MS4yMDAyIDU3LjQ0M0M2MS4yMDAyIDYxLjIwMjEgNjEuMjAwMiA2NC4yNDkzIDQ5LjEwMDEgNjQuMjQ5M0MzNyA2NC4yNDkzIDM3IDYxLjIwMjEgMzcgNTcuNDQzQzM3IDUzLjY4NCA0Mi40MTc0IDUwLjYzNjcgNDkuMTAwMSA1MC42MzY3QzU1Ljc4MjggNTAuNjM2NyA2MS4yMDAyIDUzLjY4NCA2MS4yMDAyIDU3LjQ0M1oiIGZpbGw9IiNBQUFBQUEiPjwvcGF0aD4KPC9zdmc+Cg=="},
    address: {type:Object, default:{line1:'', line2:''}},
    gender: {type:String,default:"Not Selected"},
    dob: {type:String,default:"Not Selected"},
    phone: {type:String,default:'000000000'}
})

const userModel = mongoose.models.user || mongoose.model('user', userSchema)


export default userModel