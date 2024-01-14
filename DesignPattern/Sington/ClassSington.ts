export default class ClassSington{

    private static instance: ClassSington;

    static getInstance():ClassSington{
        if(!ClassSington.instance){
            ClassSington.instance = new ClassSington();
        }
        return ClassSington.instance;
    }

    static getFunctionAny(){
        return 'return any logic'
    }
}