// src/components/StudentIDCard.js
import React, { useState } from 'react';
import "./IdCard.css"
import QRCode from 'react-qr-code';

const StudentIDCard = ({ student, index }) => {


  const [value, setValue] = useState(null)
  
  const std = `Name : ${student.Name},
  Roll No : ${student["Roll No"]},
  Email : ${student.Name.replace(/\s+/g, '').toLowerCase()}@gamail.com,
  Session : ${student['session ']}
  Student Id : ${`66${student["session "].replace('-', '')}${student['Roll No']}${String(index + 1).padStart(3, "0")}`} `

  console.log(std);
  
  return (
    <section>
      <div class="card1">
        <div class="card">
          <div class="left-container border-right">
            <img class='image' src="https://scontent.fdac27-2.fna.fbcdn.net/v/t39.30808-6/448259987_1549742315884200_4319699826750942092_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=rke5gDjuuzcQ7kNvgFZ9Oy2&_nc_ht=scontent.fdac27-2.fna&oh=00_AYAIKC1y1gUtRX3qYlzmOd1XW0NTo_nUmHvm-Nnbago18g&oe=6680D368" alt="Profile pic" />
            <h2 class="gradienttext" style={{ 'fontSize': '25px', 'marginTop': '10px' }}>{student.Name}</h2>
            <p style={{ 'fontSize': '15px' }}>Department Of {"Computer"} Technology</p>
          </div>
          <div class="right-container">
            <div class="logo-Text">
              <h3 class="gradienttext" style={{ 'fontSize': '35px' }}>
                Frienemie Ltd.</h3>
              <img class='logo' src="https://media.istockphoto.com/id/1352367851/vector/dx-vector-icon-illustration.jpg?s=612x612&w=0&k=20&c=_m2prNR3aJFKZ-AH5kVKMr9RGmBnKoWU6J-ExRMBaC0=" alt="" />
            </div>
            <table>
              <tr>
                <td>Name :</td>
                <td>{student.Name}</td>
              </tr>
              <tr>
                <td>Roll No:</td>
                <td>{student["Roll No"]}</td>
              </tr>
              <tr>
                <td>Email :</td>
                <td>{student.Name.replace(/\s+/g, '').toLowerCase()}@gamail.com</td>
              </tr>
              <tr>
                <td>Session :</td>
                <td>{student['session ']}</td>
              </tr>
            </table>
            <div class="social-icons"> Id No : {" "}
              <a href="#"><i class="fa fa-twitter">{`66${student["session "].replace('-', '')}${student['Roll No']}${String(index + 1).padStart(3, "0")}`}</i></a>
            </div>
            <div class="credit">Made with <span >&#x2764; </span>, by<a href=""> Frienemie Design </a></div>
          </div>
        </div>
      </div>

      <div class="card1">
        <div class="card">

          <div class="right-container border-right">
            <div class="logo-Text" style={{ 'paddingTop': '30px', 'paddingBottom': '30px' }}>
              <img class='logo' src="https://media.istockphoto.com/id/1352367851/vector/dx-vector-icon-illustration.jpg?s=612x612&w=0&k=20&c=_m2prNR3aJFKZ-AH5kVKMr9RGmBnKoWU6J-ExRMBaC0=" alt="" />
              <h3 class="gradienttext" style={{ 'fontSize': '35px' }}>
                Frienemie Ltd.</h3>
            </div>
          </div>

          <div class="left-container back-side">
            <div class='image' style={{ 'borderRadius': '0px' }} >
              <QRCode
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={std}
                viewBox={`0 0 256 256`}
              />
            </div>
            <br style={{ 'marginTop': '20px' }} /><div class="credit">Made with <span >&#x2764; </span>, by<a href=""> Frienemie Design </a></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StudentIDCard;
