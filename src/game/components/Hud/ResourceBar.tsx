import classNames from "classnames";
import { Emoji } from "../../../emoji";
import { ResourcesEntity } from "../../entities/resources";
import styles from "./ResourceBar.module.css";

export interface Props {
    resources?: ResourcesEntity;
}

const round = (n: number): number => {
    return Math.round(n * 100) / 100;
};

const formatIncome = (income: number) => {
    const positive = income > 0;
    return (
        income !== 0 && (
            <span
                className={classNames(
                    styles.income,
                    positive ? styles.incomePositive : styles.incomeNegative,
                )}
            >
                {" "}
                {positive && "+"}
                {income}
            </span>
        )
    );
};

const formatResource = (symbol: string, current: number, income: number) => (
    <span>
        {symbol} {Math.floor(current)}
        {formatIncome(income)}
    </span>
);

const ResourceBar = ({ resources = {} }: Props) => {
    const {
        escudos = 0,
        wood = 0,
        previous: { escudos: previousEscudos = 0, wood: previousWood = 0 } = {},
    } = resources;

    const income = {
        escudos: round(escudos - previousEscudos),
        wood: round(wood - previousWood),
    };

    const escudosText = formatResource(Emoji.escudos, escudos, income.escudos);
    const woodText = formatResource(Emoji.wood, wood, income.wood);

    return (
        <div className={styles.resourceBar}>
            {escudosText}&nbsp;&nbsp;&nbsp;{woodText}
        </div>
    );
};

export default ResourceBar;
