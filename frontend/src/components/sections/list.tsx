import {
    List,
    Table,
    TextField,
    useTable,
    IResourceComponentsProps,
    getDefaultSortOrder,
    GetListResponse, Space, EditButton, ShowButton, DeleteButton,
} from "@pankod/refine";
import {ISection, IPost} from "src/interfaces";

export const SectionList: React.FC<IResourceComponentsProps<GetListResponse<ISection>>> = ({initialData}) => {
    const {tableProps, sorter} = useTable<ISection>({
        queryOptions: {
            initialData,
        },
    });

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column
                    dataIndex="id"
                    key="id"
                    title="ID"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("id", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="name"
                    key="name"
                    title="Section Name"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("name", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="shortname"
                    key="shortname"
                    title="Short Name"
                    render={(value) => <TextField value={value}/>}
                    defaultSortOrder={getDefaultSortOrder("shortname", sorter)}
                    sorter
                />
                <Table.Column<ISection>
                    title="Actions"
                    dataIndex="actions"
                    render={(_, record) => (
                        <Space>
                            <EditButton hideText size="small" recordItemId={record.id}/>
                            <ShowButton hideText size="small" recordItemId={record.id}/>
                            <DeleteButton hideText size="small" recordItemId={record.id}/>
                        </Space>
                    )}
                />
            </Table>
        </List>
    );
};
