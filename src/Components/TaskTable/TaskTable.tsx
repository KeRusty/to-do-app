import React, { useState } from "react";
import { Table, Tag, Radio, Space } from 'antd';

import "./TaskTable.less";

const TaskTable: React.FC<TaskTableProps> = (props) => {

    const { data } = props;

    console.log(data)

    const columns = [
        {
            title: 'Task',
            dataIndex: 'task',
            key: 'task',
            render: (text: any) => <a>{text}</a>,
        },
        {
            title: 'Importance',
            dataIndex: 'important',
            key: 'important'
        },
        {
            title: 'Action',
            key: 'action',
            render: (text: any, record: any) => (
                <Space size="middle">
                    <a>Done</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];

    return (

        <div className="container">

            <Table
                columns={columns}
                pagination={{ position: ["bottomRight"] }}
                dataSource={data}
            />

        </div>

    );
};

interface TaskTableProps {
    [key: string]: any;
}

export default TaskTable;
