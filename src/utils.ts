import {
  FilterInput,
  SearchTermInput,
  SearchTermMatch,
} from "./schema";
import { FindFilter, SearchTerm } from "./grpc/protos/find-settings_pb";

const getSelection = (name: string, info: any): any => {
  for (const selection of info.operation.selectionSet.selections) {
    if (selection.name.value == name) {
      return selection;
    }
  }
}

/**
 * Devuelve un array con los fields que el cliente solicitó para una query.
 * @param name El nombre del objeto; por lo general, va a ser el nombre del resolver
 * @param info El cuarto argumento del resolver
 */
export const getQueriedFields = (name: string, info: any): string[] => {
  const selection = getSelection(name, info);
  return !selection
    ? []
    : selection.selectionSet.selections.map((s: { name: { value: any; }; }) => s.name.value);
}

export const filterInputToProtobuf = (filters: FilterInput[]): FindFilter[] => {
  if (!filters) {
    return [];
  }

  const ret: FindFilter[] = [];
  for (const filter of filters) {
    const fReq = new FindFilter();
    fReq.setField(decamelize(filter.field));
    fReq.setValue(filter.value);
    ret.push(fReq);
  }
  return ret;
}

export const searchTermInputToProtobuf = (searchTerms: SearchTermInput[]): SearchTerm[] => {
  if (!searchTerms) {
    return [];
  }

  const ret: SearchTerm[] = [];
  for (const st of searchTerms) {
    const stReq = new SearchTerm();
    stReq.setFieldsList(st.fields.map(decamelize));
    stReq.setValue(st.value);
    switch (st.match) {
      case SearchTermMatch.Exact:
        stReq.setMatch(SearchTerm.Match.EXACT);
    }
    ret.push(stReq);
  }
  return ret;
}

export const camelize = (text: string): string => text
  .replace(/^([A-Z])|[\s-_]+(\w)/g, (_, p1, p2) =>
    p2 ? p2.toUpperCase() : p1.toLowerCase()
  );

export const decamelize = (text: string): string => text
  .replace(/([a-z\d])([A-Z])/g, '$1_$2')
  .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1_$2')
  .toLowerCase();
