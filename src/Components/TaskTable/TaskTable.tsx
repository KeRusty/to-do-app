import React, { useState, useCallback, useEffect } from "react";
import { Table, Button, notification } from 'antd';
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";

import CompletedTable from "../CompletedTable/CompletedTable";

import "./TaskTable.less";

const TaskTable: React.FC<TaskTableProps> = (props) => {

    const [data, setData] = useState(props);

    const [completed, setCompleted] = useState<TaskTableProps[]>([]);

    useEffect(() => {

        setData(props)

    }, [data, props]);

    const onDelete = useCallback((index: any) => {

        const spliced = data.data.splice(index, 1);

        setData(spliced)

        notification.error({
            message: "Deleted",
            description: "Task Successfully Deleted"
        });

    }, [data]);

    const onFinish = useCallback((record: any, index: any) => {

        record.status = "Done"

        setCompleted([...completed, record]);

        notification.success({
            message: "Completed",
            description: "Task Completed"
        });

        const spliced = data.data.splice(index, 1);

        setData(spliced)

    }, [completed, data]);

    const columns = [
        {
            title: 'Task',
            dataIndex: 'task',
            key: 'task',
            width: '600px',
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
            width: '120px',
            render: (text: any, record: any, index: any) => (
                <>
                    <Button
                        icon={<CheckOutlined />}
                        shape={"circle"}
                        type={"primary"}
                        style={{ marginRight: 8 }}
                        onClick={() => onFinish(record, index)}
                    />
                    <Button
                        icon={<CloseOutlined />}
                        shape={"circle"}
                        onClick={() => onDelete(index)}
                    />
                </>
            ),
        }
    ];

    return (

        <div className="container">

            <Table
                columns={columns}
                pagination={{ position: ["bottomRight"] }}
                dataSource={data.data}
            />

            {completed.length > 0 &&
                <div className="complete-container">
                    <CompletedTable
                        data={completed}
                    />
                </div>

            }

        </div>

    );
};

interface TaskTableProps {
    [key: string]: any;
}

export default TaskTable;


