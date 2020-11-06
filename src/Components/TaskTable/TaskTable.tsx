import React, { useState, useCallback, useEffect } from "react";
import { Table, Button } from 'antd';
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";

import "./TaskTable.less";

const TaskTable: React.FC<TaskTableProps> = (props) => {

    //const { data } = props;

    const [data, setData] = useState(props);

    useEffect(() => {

        setData(props)

    }, [data, props]);

    const onDelete = useCallback((index: any) => {

        const spliced = data.data.splice(index, 1);

        setData(spliced)

    }, [data]);

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
            render: (text: any, record: any, index: any) => (
                <>
                    <Button
                        icon={<CheckOutlined />}
                        shape={"circle"}
                        type={"primary"}
                        style={{ marginRight: 8 }}
                    />
                    <Button
                        icon={<CloseOutlined />}
                        shape={"circle"}
                        onClick={() => onDelete(index)}
                    />
                </>
            ),
        },
    ];

    return (

        <div className="container">

            <Table
                columns={columns}
                pagination={{ position: ["bottomRight"] }}
                dataSource={data.data}
            />


        </div>

    );
};

interface TaskTableProps {
    [key: string]: any;
}

export default TaskTable;
