import React from 'react';
import { Person } from '../../../../types';
import { PeopleLink } from '../PersonLink';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  person: Person;
  people: Person[];
};

export const PersonRow: React.FC<Props> = ({ person, people }) => {
  const { personSlug } = useParams();

  const mother = person.motherName
    ? people.find(p => p.name === person.motherName)
    : null;
  const father = person.fatherName
    ? people.find(p => p.name === person.fatherName)
    : null;

  return (
    <tr
      data-cy="person"
      className={classNames({
        'has-background-warning': personSlug === person.slug,
      })}
    >
      <td>
        <PeopleLink person={person} />
      </td>

      <td>{person.sex}</td>
      <td>{person.born}</td>
      <td>{person.died}</td>

      <td>
        {mother ? (
          <PeopleLink person={mother} />
        ) : person.motherName ? (
          person.motherName
        ) : (
          '-'
        )}
      </td>

      <td>
        {father ? (
          <PeopleLink person={father} />
        ) : person.fatherName ? (
          person.fatherName
        ) : (
          '-'
        )}
      </td>
    </tr>
  );
};
