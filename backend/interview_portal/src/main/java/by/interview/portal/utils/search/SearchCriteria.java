package by.interview.portal.utils.search;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SearchCriteria {
    private String logicalOperand;
    private String key;
    private String operation;
    private Object value;
}
