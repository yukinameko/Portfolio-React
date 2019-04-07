import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import nameko from './data/image/icon/nameko.png';
import Particles from 'react-particles-js';

const internTitle = require('./data/intern/title.json');
const internData = require('./data/intern/data.json');
const skillTitle = require('./data/skill/title.json');
const skillData = require('./data/skill/data.json');

const CreateTable = (props) => {
  return (
    <table >
      <tr>
        {props.title.map(v => (<th>{v}</th>))}
      </tr>
      {
        props.data.map(d => (<tr>
          {props.title.map(v => {
            return <td>{d[v].split('\n').map(v => (<span>{v}<br/></span>))}</td>
          })}
          </tr>))
      }
    </table>
    );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className="particles" params={{
      "particles": {
          "number": {
              "value": 100,
              "density": {
                  "enable": false
              }
          },
          "size": {
              "value": 10,
              "random": true
          },
          "move": {
              "direction": "bottom",
              "out_mode": "out"
          },
          "line_linked": {
              "enable": false
          },
          // "color": {
          //   "value":"#000000"
          // }
      },
      "interactivity": {
          "events": {
              "onclick": {
                  "enable": true,
                  "mode": "remove"
              }
          },
          "modes": {
              "remove": {
                  "particles_nb": 10
              }
          }
      }
  }}/>
        <ul id="nav">
          <li><a href="#intro">Profile</a></li>
          <li><a href="#history">History</a></li>
          <li><a href="#skill">Skill</a></li>
          <li><a href="#del">Products</a></li>
        </ul>
        <header className="App-header">
          <div className="Background-App-logo">
            <img src={nameko} className="App-logo" alt="logo" />
          </div>
          <h1 id="intro">Profile</h1>
          <dl className="contents">
            <dt>Name</dt> <dd>大門 由樹 Daimon Yoshiki / なめこ Nameko</dd>
            <dt>Birthday</dt> <dd>1998/1/16</dd>
            <dt>From</dt> <dd>富山県</dd>
            <dt>Belong</dt> <dd>筑波大学 情報学群 情報科学類 4年 知能情報メディア専攻</dd>
          </dl>

          <h1 id="history">History</h1>
            <h2>Education</h2>
              <dl className="contents">
                <dt>2013/4~2018/3</dt> <dd>石川工業高等専門学校 電子情報工学科</dd>
                <dt>2018/4~</dt> <dd>筑波大学 情報学群 情報科学類</dd>
              </dl>
            <h2>Internship</h2>
              <CreateTable title={internTitle} data={internData}/>
            <h2>Award</h2>
              <ul>
                <li>第3回学生スマートフォンアプリコンテスト<br/>プレゼンテーション賞</li>
                <li>e-ZUKA スマートフォンアプリコンテスト 2018<br/>ヌーラボ賞・福岡県済生会飯塚嘉穂病院賞</li>
              </ul>

          <h1 id="skill">Skill</h1>
            2019年4月現在
            <CreateTable title={skillTitle} data={skillData}/>
            
        </header>
      </div>
    );
  }
}

export default App;
