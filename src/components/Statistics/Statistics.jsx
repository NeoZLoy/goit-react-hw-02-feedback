import { List, ListItem } from "./Statistics.styled"
export const Statistics = ({stats, total, percentage}) => {
    return(
        <List>
            <ListItem>Good: {stats.good}</ListItem>
            <ListItem>Neutral: {stats.neutral}</ListItem>
            <ListItem>Bad: {stats.bad}</ListItem>
            <ListItem>Total: {total}</ListItem>
            <ListItem>Positive feedback: {percentage}%</ListItem>
        </List>
    )
}