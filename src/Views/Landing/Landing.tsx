import React from "react";
import {
    Form,
    Select,
    Input,
    Switch,
    Slider,
    Button,
} from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';

import "./Landing.less";

const Landing: React.FC<LandingProps> = (props) => {

    const { Option } = Select;

    const formItemLayout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 14 },
    };

    const normFile = (e: any) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };


    return (

        <div className="container">

            <div className="heading-container">

                <h1 className="heading-text">To Do</h1>

            </div>

            <div className="form-container">

                <Form
                    name="validate_other"
                    layout="vertical"
                    onFinish={onFinish}
                >

                    <Form.Item
                        name="task"
                        rules={[
                            {
                                required: true,
                                message: 'Please input a Task!',
                            },
                        ]}
                    >
                        <Input size="large" placeholder="What needs to be done?" />

                    </Form.Item>

                    <Form.Item wrapperCol={{ span: 12, offset: 6 }}>

                        <Button type="primary" htmlType="submit">Add Task</Button>

                    </Form.Item>
                </Form>

            </div>

        </div>

    );
};

interface LandingProps {
    [key: string]: any;
}

export default Landing;
