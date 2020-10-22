import i18n from '@/lang';

export const rules = {
    rules: {
        username: [{
            required: true,
            message: "Пожалуйста, введите login ",
            trigger: "blur",
        }, ],
        password: [{
                required: true,
                message: "Пожалуйста, введите пароль",
                trigger: "blur",
            },
            {
                min: 6,
                max: 20,
                message: "Длина должна быть от 6 до 20",
                trigger: "blur",
            },
        ],
    },
};