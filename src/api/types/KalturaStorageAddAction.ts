
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
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

KalturaTypesFactory.registerType('KalturaStorageAddAction',KalturaStorageAddAction);
