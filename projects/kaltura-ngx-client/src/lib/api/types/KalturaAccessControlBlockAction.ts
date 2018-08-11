
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaRuleAction, KalturaRuleActionArgs } from './KalturaRuleAction';

export interface KalturaAccessControlBlockActionArgs  extends KalturaRuleActionArgs {
    
}


export class KalturaAccessControlBlockAction extends KalturaRuleAction {

    

    constructor(data? : KalturaAccessControlBlockActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAccessControlBlockAction' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAccessControlBlockAction'] = KalturaAccessControlBlockAction;