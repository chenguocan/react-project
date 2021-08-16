import React, { Component } from 'react'
import "./index.less"
// /^[a-zA-Z0-9_]+$/
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import logo from '../../assets/images/logo.png'


export default class index extends Component {

    onFinish = (values) => {
        console.log(values)
    }
    render() {
        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo" className="login-logo"></img>
                    <div className="login-title">后台管理系统</div>
                </header>
                <section className="form">
                    <h2 className="form-title">用户登录</h2>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        wrapperCol={{ span: 16 ,offset:4}}
                        onFinish={this.onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入用户名',
                                },
                                {
                                    min:3,
                                    message:'用户名长度不少于3'
                                },
                                {
                                    max:10,
                                    message:'用户名长度不大于10'
                                }
                            ]}
                        >
                            <Input  prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入密码',
                                },
                                {
                                    min:3,
                                    message:'密码长度不少于3'
                                },
                                {
                                    max:10,
                                    message:'密码长度不大于10'
                                },
                                {
                                    pattern:/^[a-zA-Z0-9_]+$/,
                                    message:'请输入a-z或0-9'
                                }
                            ]}
                        >
                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button submit-btn">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}
