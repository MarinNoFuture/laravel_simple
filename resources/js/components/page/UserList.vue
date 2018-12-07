<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-cascades"></i> 用户列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <el-input v-model="select_word" placeholder="筛选关键词" class="handle-input mr10"></el-input>
                <el-button type="primary" icon="search" @click="search">搜索</el-button>
            </div>
            <el-table :data="data" border class="table" ref="multipleTable">

                <el-table-column prop="id" label="ID" sortable width="60">
                </el-table-column>
                <el-table-column prop="name" label="用户名" sortable width="200">
                </el-table-column>
                <el-table-column prop="email" label="邮箱" width="300">
                </el-table-column>
                <el-table-column prop="created_at" label="注册时间" :formatter="formatter">
                </el-table-column>
                <!--<el-table-column label="操作" width="180" align="center">-->
                    <!--<template slot-scope="scope">-->
                        <!--<el-button type="text" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>-->
                        <!--<el-button type="text" icon="el-icon-delete" class="red" @click="handleDelete(scope.$index, scope.row)">删除</el-button>-->
                    <!--</template>-->
                <!--</el-table-column>-->
            </el-table>
            <div class="pagination">
                <el-pagination background @current-change="handleCurrentChange" layout="prev, pager, next" :total="total">
                </el-pagination>
            </div>
        </div>

        <!-- 编辑弹出框 -->
        <!--<el-dialog title="编辑" :visible.sync="editVisible" width="30%">-->
            <!--<el-form ref="form" :model="form" label-width="50px">-->
                <!--<el-form-item label="日期">-->
                    <!--<el-date-picker type="date" placeholder="选择日期" v-model="form.date" value-format="yyyy-MM-dd" style="width: 100%;"></el-date-picker>-->
                <!--</el-form-item>-->
                <!--<el-form-item label="姓名">-->
                    <!--<el-input v-model="form.name"></el-input>-->
                <!--</el-form-item>-->
                <!--<el-form-item label="地址">-->
                    <!--<el-input v-model="form.address"></el-input>-->
                <!--</el-form-item>-->

            <!--</el-form>-->
            <!--<span slot="footer" class="dialog-footer">-->
                <!--<el-button @click="editVisible = false">取 消</el-button>-->
                <!--<el-button type="primary" @click="saveEdit">确 定</el-button>-->
            <!--</span>-->
        <!--</el-dialog>-->

        <!--&lt;!&ndash; 删除提示框 &ndash;&gt;-->
        <!--<el-dialog title="提示" :visible.sync="delVisible" width="300px" center>-->
            <!--<div class="del-dialog-cnt">删除不可恢复，是否确定删除？</div>-->
            <!--<span slot="footer" class="dialog-footer">-->
                <!--<el-button @click="delVisible = false">取 消</el-button>-->
                <!--<el-button type="primary" @click="deleteRow">确 定</el-button>-->
            <!--</span>-->
        <!--</el-dialog>-->
    </div>
</template>

<script>
    import fetch from "../../services/fetch";
    import bus from '../common/bus';

    export default {
        name: 'usertable',
        data() {
            return {
                url: 'admin.user.list',
                tableData: [],
                total: 0,
                cur_page: 1,
                select_word: '',
                is_search: false,
            }
        },
        created() {
            this.getData();
        },
        computed: {
            data() {
                return this.tableData.filter((d) => {
                    if (d.name.indexOf(this.select_word) > -1
                        || d.email.indexOf(this.select_word) > -1
                    ) {
                        return d;
                    }
                })
            }
        },
        methods: {
            // 分页导航
            handleCurrentChange(val) {
                this.cur_page = val;
                this.getData();
            },
            // 获取数据
            getData() {
                fetch.post(this.url, { page: this.cur_page })
                .then(res => {
                    this.tableData = res.data;
                    this.total = res.total;
                }).catch(err=>{

                });
//                .catch(err => {
//                    this.$message.error('获取活动信息失败');
//                    reject(err);
//                });
//                this.$axios({
//                    url: this.url,
//                    method: 'post',
//                    data: {page: this.cur_page},
//                    headers: {
//                        'Accept': 'application/vnd.marvin.system+json',
//                        'Authorization': 'Bearer ' + localStorage.getItem('ms_token'),
//                    },
//                }).then((res) => {
//                    this.tableData = res.data.data;
//                    this.total = res.data.total;
//                }).catch((error) => {
//                    localStorage.removeItem('ms_username');
//                    localStorage.removeItem('ms_token');
//                    this.$router.push('/login');
//                });
            },
            search() {
                this.is_search = true;
            },
            formatter(row, column) {
                return row.created_at;
            },
        }
    }

</script>

<style scoped>
    .handle-box {
        margin-bottom: 20px;
    }
    .handle-input {
        width: 300px;
        display: inline-block;
    }
    .table {
        width: 100%;
        font-size: 14px;
    }
</style>
