// Create web server
// 1. npm install express
// 2. npm install body-parser
// 3. npm install cors
// 4. npm install morgan
// 5. npm install --save-dev nodemon
// 6. npm install mongoose
// 7. npm install dotenv

// 1. import express
const express = require('express');
// 2. import body-parser
const bodyParser = require('body-parser');
// 3. import cors
const cors = require('cors');
// 4. import morgan
const morgan = require('morgan');
// 5. import mongoose
const mongoose = require('mongoose');
// 6. import dotenv
const dotenv = require('dotenv');

// 1. import comments
const Comment = require('./models/comment');

// 2. import db
const db = require('./config/db');

// 3. import routes
const router = require('./routes');

// 4. import middleware
const { errorHandler, notFound } = require('./middleware');

// 5. import seed
const seed = require('./seed');

// 6. import auth
const auth = require('./auth');

// 7. import passport
const passport = require('passport');

// 8. import passport-jwt
const passportJWT = require('passport-jwt');

// 9. import dotenv
const dotenv = require('dotenv');

// 10. import User
const User = require('./models/user');

// 11. import jwt
const jwt = require('jsonwebtoken');

// 12. import bcrypt
const bcrypt = require('bcrypt');

// 13. import validator
const validator = require('validator');

// 14. import multer
const multer = require('multer');

// 15. import path
const path = require('path');

// 16. import fs-extra
const fs = require('fs-extra');

// 17. import aws
const aws = require('aws-sdk');

// 18. import multer-s3
const multerS3 = require('multer-s3');

// 19. import cookie-parser
const cookieParser = require('cookie-parser');

// 20. import express-session
const session = require('express-session');

// 21. import connect-mongo
const MongoStore = require('connect-mongo')(session);

// 22. import fileUpload
const fileUpload = require('express-fileupload');

//