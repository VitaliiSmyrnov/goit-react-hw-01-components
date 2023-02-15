import PropTypes from 'prop-types';
import {
  Section,
  Title,
  StatList,
  StatItem,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => (
  <Section>
    {title && <Title>{title}</Title>}

    <StatList>
      {stats.map(({ id, label, percentage }) => (
        <StatItem key={id}>
          <Label>{label}</Label>
          <Percentage>{percentage}</Percentage>
        </StatItem>
      ))}
    </StatList>
  </Section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
