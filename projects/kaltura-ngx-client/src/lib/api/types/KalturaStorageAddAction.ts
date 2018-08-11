
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaRuleAction, KalturaRuleActionArgs } from './KalturaRuleAction';

export interface KalturaStorageAddActionArgs  extends KalturaRuleActionArgs {
    
}


export class KalturaStorageAddAction extends KalturaRuleAction {

    

    constructor(data? : KalturaStorageAddActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaStorageAddAction' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaStorageAddAction'] = KalturaStorageAddAction;