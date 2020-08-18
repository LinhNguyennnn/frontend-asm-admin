import styled from "styled-components";
import { } from "antd";

export const Header = styled('div')`
  .menu-desktop{
    height: 124px;
    box-shadow: 0 1px 5px 0px rgba(0,0,0,0.2);
  }
`;

export const Wrapper = styled('div')`
  width: 100%;
`;

export const Nav = styled('div')`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  position: relative;
  width: 100%;
  top: 0;
`;

export const NavHeader = styled('div')`
    width: 100%;
    background: #3c4451;
    border: 0;
`;

export const UlCustom = styled('ul')`
  display: flex;
  margin: 0;
  justify-content: flex-end;
  flex-wrap: wrap;
  padding-left: 0;
  list-style: none;
  align-items: center;
  li{
    a{
      padding: 0 20px;
      line-height: 50px;
    }
  }
`;

export const AdminName = styled('b')`
  color: #ffffff;
  margin: 0 10px;
  &:hover{
    color: red;
  }
`;

export const Dashboard = styled('div')`
  position: fixed;
  z-index: 1001;
  top: 0;
  width: 240px;
  padding-top: 0;
  height: 100%;
  transition: 0.05s ease-in;
  overflow-y: auto;
  max-width: calc(100% - 30px);
  background-color: #fff;
`;

export const Logo = styled('div')`
  padding: 25px 35px;
  text-align: center;
`;

export const UlListSelect = styled('ul')`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  li{
    width: 100%;
    a{
      padding: 10px 25px;
      width: 100%;
      color: #97999f;
      position: relative;
      cursor: pointer;
      display: inline-block;
      overflow: hidden;
      -webkit-user-select: none;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
      &:hover{
        background-color: #e4e4e4;
      }
    }
  }
`;