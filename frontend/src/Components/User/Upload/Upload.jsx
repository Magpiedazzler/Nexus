import React from 'react'
import './Upload.css'
import {Link,useNavigate} from "react-router-dom"
import * as Yup from 'yup'
import {useFormik} from 'formik'
import { appreg } from '../../../Services/userApi'

export default function Upload() {

  const supportedExtentionRegex=/\.(exe|dmg|app|apk|deb|rpm|msi)$/i;
  const supportedImageExtentionRegex=/\.(jpg|jpeg|png|avif)$/i;

  const navigate=useNavigate()

  const initialValues={
    appname:"",
    description:"",
    devname:"",
    publname:"",
    category:"",
    appicon:"",
    screenshots:"",
    appfile:"",
  };

  const validationSchema=Yup.object({
    appname:Yup.string()
      .strict(true)
      .trim("* Name must not contain white space")
      .test(
        "* no-whitespace",
        "* Name must not contain white space",
        (value)=>!/\s/.test(value)
      )
      .min(3,"* Name must be atleast 3 charecters long")
      .matches(/^[A-Za-z]+$/,"* Name must only contain charecters")
      .required("* This field is required"),
    description:Yup.string()
      .min(15,"* Password must be atleast 15 charecters long")
      .required("* This field is required"),
    devname:Yup.string()
      .required("* This field is required")
      .min(3,"* Name must be atleast 3 charecters long")
      .matches(/^[A-Za-z]+$/,"* Name must only contain charecters"),
    publname:Yup.string()
      .required("* This field is required")
      .min(3,"* Name must be atleast 3 charecters long")
      .matches(/^[A-Za-z]+$/,"* Name must only contain charecters"),
    category:Yup.string()
      .required("* This field is required"),
    appicon:Yup.mixed()
      .test("fileType", "Unsupported file type", (value)=>{
        if(!value) return false;
        return supportedImageExtentionRegex.test(value.name);
      })
      .required("* This field is required"),
    appfile:Yup.mixed()
      .required("* This field is required")
      .test("fileType", "Unsupported file type", (value)=>{
        if(!value)  return false;
        return supportedExtentionRegex.test(value.name);
      }),
    screenshots:Yup.mixed()
    .test("fileType", "Unsupported file type", (value)=>{
      if(!value) return false;
      return supportedImageExtentionRegex.test(value.name);
    })
    .required("* This field is required"),
  });

  const onSubmit=async(values,{resetForm})=>{
    console.log(values);
    const data=await appreg(values);
    console.log(data);
    if(data.data.status){
  //     toast.success("Login successfully")
      resetForm()
      navigate("/login")
    }else{
  //     toast.console.error("Unable to login");
    }
  };

  const formik =useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div>

        <div class="div2" id='div2'>
    <section>
        <div class="container">
            <div class="row">
                    <h4 id='uh'>UPLOAD YOUR APPLICATION</h4>
                    <form onSubmit={formik.handleSubmit} id='form3'>
                    <div className="container">
                      <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6" id='basic'>
                          <h3>Basic Details</h3><br /><br />
                          <input type="text" name='appname' id='appname' placeholder='Application Name' 
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.appname}/>
                          <br /><hr id='hr1_1'/><br />
                          {formik.touched.appname && formik.errors.appname ?(
                            <p className='text-danger errorMsg' style={{fontSize:"12px",margin:"0px",position:"relative",top:"-50px"}}>
                              {formik.errors.appname}
                            </p>
                          ):null}
                          <textarea name="description" id="desc" cols="30" rows="10" placeholder='Description of the Application'
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.description}></textarea>
                          <br /><hr id='hr2'/><br />
                          {formik.touched.description && formik.errors.description ?(
                            <p className='text-danger errorMsg' style={{fontSize:"12px",margin:"0px",position:"relative",top:"-75px"}}>
                              {formik.errors.description}
                            </p>
                          ):null}
                          <input type="text" name="devname" id="devname" placeholder='Developer name'
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.devname}/>
                          <br /><hr id='hr1'/><br />
                          {formik.touched.devname && formik.errors.devname ?(
                            <p className='text-danger errorMsg' style={{fontSize:"12px",margin:"0px",position:"relative",top:"-90px"}}>
                              {formik.errors.devname}
                            </p>
                          ):null}
                          <input type="text" name="publname" id="publname" placeholder='Publisher name'
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.publname}/>
                          <br /><hr id='hr1'/><br />
                          {formik.touched.publname && formik.errors.publname ?(
                            <p className='text-danger errorMsg' style={{fontSize:"12px",margin:"0px",position:"relative",top:"-90px"}}>
                              {formik.errors.publname}
                            </p>
                          ):null}
                          <select name="category" id="category"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.category}>
                          <option value="">Choose category</option>
                            <option value="Productivity">Productivity</option>
                            <option value="Social Networking">Social Networking</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Communication">Communication</option>
                            <option value="Education">Education</option>
                            <option value="Health and Fitness">Health and Fitness</option>
                            <option value="Travel">Travel</option>
                            <option value="Finance">Finance</option>
                            <option value="Shopping">Shopping</option>
                            <option value="Utilities">Utilities</option></select><br /><hr id='hr1'/><br />
                            {formik.touched.category && formik.errors.category ?(
                              <p className='text-danger errorMsg' style={{fontSize:"12px",margin:"0px",position:"relative",top:"-90px"}}>
                                {formik.errors.category}
                              </p>
                            ):null}
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6" id='basic1'>
                          <h3>Upload files</h3><br /><br />
                          <label id='upbtn-label1'>Upload app icon </label><br />
                          <div className="uploadButtons">
                            <input type="file"  name='appicon' id='upbtn1'
                            onChange={(event)=>formik.setFieldValue("appicon",event.currentTarget.files[0])}
                            onBlur={formik.handleBlur}/><br /><br />
                            {formik.touched.appicon && formik.errors.appicon ?(
                                <p className='text-danger errorMsg' style={{fontSize:"12px",margin:"0px",position:"relative",top:"0px"}}>
                                  {formik.errors.appicon}
                                </p>
                              ):null}
                          </div><br />
                          <label id='upbtn-label1'>upload sample screenshots</label><br />
                          <div className='uploadButtons'>
                            <input type="file" name='screenshots' id='upbtn2'
                            onChange={(event)=>formik.setFieldValue("screenshots",event.currentTarget.files[0])}
                            onBlur={formik.handleBlur}/><br /><br />
                            {formik.touched.screenshots && formik.errors.screenshots ?(
                                <p className='text-danger errorMsg' style={{fontSize:"12px",margin:"0px",position:"relative",top:"0px"}}>
                                  {formik.errors.screenshots}
                                </p>
                              ):null}
                          </div><br />
                          <label id='upbtn-label1'>Choose app file</label><br />
                          <div className='uploadButtons'>
                            <input type="file" name='appfile' id='upbtn3'
                            onChange={(event)=>formik.setFieldValue("appfile",event.currentTarget.files[0])}
                            onBlur={formik.handleBlur}/><br /><br />
                            
                            {formik.touched.appfile && formik.errors.appfile ?(
                                <p className='text-danger errorMsg' style={{fontSize:"12px",margin:"0px",position:"relative",top:"0px"}}>
                                  {formik.errors.appfile}
                                </p>
                              ):null}
                            </div>
                        </div>
                      </div>
                    </div>
                    <input type="submit" id="subbtn" />
                    </form>
            </div>
        </div>
    </section>
        </div>
    </div>
  )
}
