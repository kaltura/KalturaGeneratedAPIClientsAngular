
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAuditTrailChangeXmlNodeType } from './KalturaAuditTrailChangeXmlNodeType';
import { KalturaAuditTrailChangeItem, KalturaAuditTrailChangeItemArgs } from './KalturaAuditTrailChangeItem';

export interface KalturaAuditTrailChangeXmlNodeArgs  extends KalturaAuditTrailChangeItemArgs {
    type? : KalturaAuditTrailChangeXmlNodeType;
}


export class KalturaAuditTrailChangeXmlNode extends KalturaAuditTrailChangeItem {

    type : KalturaAuditTrailChangeXmlNodeType;

    constructor(data? : KalturaAuditTrailChangeXmlNodeArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAuditTrailChangeXmlNode' },
				type : { type : 'en', subTypeConstructor : KalturaAuditTrailChangeXmlNodeType, subType : 'KalturaAuditTrailChangeXmlNodeType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAuditTrailChangeXmlNode',KalturaAuditTrailChangeXmlNode);
