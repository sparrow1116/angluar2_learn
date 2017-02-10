System.register([], function(exports_1) {
    var Student;
    return {
        setters:[],
        execute: function() {
            /**
             * Created by zhangyj on 2017/2/9.
             */
            Student = (function () {
                function Student(id, name, age, address) {
                    this.id = id;
                    this.name = name;
                    this.age = age;
                    this.address = address;
                }
                return Student;
            })();
            exports_1("Student", Student);
        }
    }
});
//# sourceMappingURL=student.js.map