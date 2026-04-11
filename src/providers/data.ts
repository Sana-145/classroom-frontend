import {BaseRecord, DataProvider, GetListParams, GetListResponse} from "@refinedev/core";
import {Subject} from "@/types";

const mockSubjects: Subject[] = [
    {
        id: 1,
        code: "CS101",
        name: "Introduction to Computer Science",
        department: "CS",
        description: "Fundamentals of programming, algorithms, and problem-solving.",
        created_at: new Date().toISOString(),
    },
    {
        id: 2,
        code: "MATH201",
        name: "Linear Algebra",
        department: "Math",
        description: "Study of vectors, matrices, and linear transformations.",
        created_at: new Date().toISOString(),
    },
    {
        id: 3,
        code: "ENG150",
        name: "English Literature",
        department: "English",
        description: "Exploration of classic and modern literary works.",
        created_at: new Date().toISOString(),
    },
];

export const dataProvider: DataProvider = {
    getList: async <TData extends BaseRecord = BaseRecord>({ resource }:
    GetListParams): Promise<GetListResponse<TData>> => {
        if(resource !== 'subjects') return { data: [] as TData[], total: 0};

        return {
            data: mockSubjects as unknown as TData[],
            total: mockSubjects.length,
        }
    },

    getOne:  async () => { throw new Error('This function is not present in mock') },
    create:  async () => { throw new Error('This function is not present in mock') },
    update:  async () => { throw new Error('This function is not present in mock') },
    deleteOne:  async () => { throw new Error('This function is not present in mock') },

    getApiUrl: () => '',
}