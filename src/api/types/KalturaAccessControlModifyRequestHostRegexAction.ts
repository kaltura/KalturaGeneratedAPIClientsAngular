
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRuleAction, KalturaRuleActionArgs } from './KalturaRuleAction';

export interface KalturaAccessControlModifyRequestHostRegexActionArgs  extends KalturaRuleActionArgs {
    pattern? : string;
	replacement? : string;
	replacmenServerNodeId? : number;
}


export class KalturaAccessControlModifyRequestHostRegexAction extends KalturaRuleAction {

    pattern : string;
	replacement : string;
	replacmenServerNodeId : number;

    constructor(data? : KalturaAccessControlModifyRequestHostRegexActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAccessControlModifyRequestHostRegexAction' },
				pattern : { type : 's' },
				replacement : { type : 's' },
				replacmenServerNodeId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAccessControlModifyRequestHostRegexAction',KalturaAccessControlModifyRequestHostRegexAction);
