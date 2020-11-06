import React, { useState, useEffect } from "react";
import { Table, Typography } from 'antd';

import "./CompletedTable.less";

const CompletedTable: React.FC<CompletedTableProps> = (props) => {

    const { Text, Title } = Typography;

    const [data, setData] = useState(props);

    const [done, setDone] = useState(false);

    const [completed, setCompleted] = useState<CompletedTableProps[]>([]);

    useEffect(() => {

        setData(props)

    }, [data, props]);

    const columns = [
        {
            title: 'Task',
            dataIndex: 'task',
            key: 'task',
            width: '600px',
            render: (text: any) => <Text delete>{text}</Text>,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (text: any) => <Text type="success">{text}</Text>,
        }
    ];

    return (

        <div className="container">

            <div>
                <Title level={3} type="secondary">Completed Tasks</Title>
            </div>

            <Table
                columns={columns}
                pagination={{ position: ["bottomRight"] }}
                dataSource={data.data}
            />


        </div >

    );
};

interface CompletedTableProps {
    [key: string]: any;
}

export default CompletedTable;


