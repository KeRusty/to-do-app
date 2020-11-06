import React, { useState } from "react";
import { Form, Input, Button, Radio, Typography } from 'antd';

import TaskTable from '../../Components/TaskTable/TaskTable';

import "./Landing.less";

const Landing: React.FC<LandingProps> = (props) => {

    const [option, setOption] = useState('important');

    const { Title } = Typography;

    const [data, setData] = useState<LandingProps[]>([]);

    const onFinish = (values: any) => {
        setData([...data, values]);
    };

    return (

        <div className="container">

            <div className="heading-container">

                <Title level={2} >To Do List</Title>

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

                    <Form.Item name="important">
                        <Radio.Group value={option}>
                            <Radio.Button value="Important">Important</Radio.Button>
                            <Radio.Button value="Take My Time">Take My Time</Radio.Button>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item wrapperCol={{ span: 12, offset: 6 }}>

                        <Button type="primary" htmlType="submit" shape="round">Add Task</Button>

                    </Form.Item>
                </Form>

            </div>

            {data.length > 0 &&
                <div>
                    <TaskTable data={data} />
                </div>
            }

        </div>

    );
};

interface LandingProps {
    [key: string]: any;
}

export default Landing;
